import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import OpenAI from "openai";

export const generateChatCompletion = async ( 
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    // Prepare user chats for OpenAI API
    const chats = user.chats.map(({ role, content }: any) => ({
      role,
      content,
    }));
    chats.push({ content: message, role: "user" });

    // Save the user's message
    user.chats.push({ content: message, role: "user" });
    await user.save();

    // Configure OpenAI API
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI API
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: chats,
    });

    // Extract assistant's response
    const assistantMessage = chatResponse.choices[0]?.message;
    if (!assistantMessage) {
      return res.status(500).json({ message: "Failed to get a response from OpenAI" });
    }

    // Save the assistant's response
    user.chats.push({ content: assistantMessage.content, role: assistantMessage.role });
    await user.save();

    // Send updated chat history
    return res.status(200).json({ chats: user.chats });

  } catch (error) {
    
    console.error("Error in generateChatCompletion:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
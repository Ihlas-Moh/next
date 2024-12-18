"use client";

import React, { useState } from "react";
import { useCreateProductMutation } from "@/lib/store/api/productService";
import FormMaker from "@/components/molecules/form/form-maker";
import RHFInput from "@/components/atoms/rhf/rhf-input";
import RHFRadioButtons from "@/components/atoms/rhf/rhf-radio-buttons";
import { z } from "zod";
import { Star } from "lucide-react";

type Props = {
  token: string;
};

// Define the schema for feedback form validation
const feedbackSchema = z.object({
  rating: z.number().min(1, "Please select a rating."),
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  type: z.enum(["review", "suggestion", "bug"]).default("review"), // Feedback type
});

type FeedbackType = z.infer<typeof feedbackSchema>;

function FeedbackForm() {
  const [rating, setRating] = useState(0); // Default rating to 0 (no rating selected)
  const [feedbackType, setFeedbackType] = useState("review"); // Default feedback type is 'review'

  const defaultValues: Partial<FeedbackType> = {
    rating,
    title: "",
    description: "",
  };

  const handleFeedbackTypeChange = (value: string) => {
    setFeedbackType(value); // Update the feedback type state
    if (value !== "review") {
      setRating(0); // Reset the rating if not "review"
    }
  };

  return (
    <div className="flex justify-start">
      <div className="rounded-xl border bg-card text-card-foreground shadow p-2">
        <FormMaker
          createHook={useCreateProductMutation}
          defaultValues={defaultValues}
          schema={feedbackSchema}
        >
          {/* Feedback Type Selection */}
          <div className="pt-4 px-4 animate">
            <RHFRadioButtons
              name="type"
              label="Feedback Type"
              render={({ field, setValue }) => (
                <div className="flex space-x-4">
                  <label className="flex text-sm justify-center">
                    <input
                      className="mr-2"
                      type="radio"
                      {...field}
                      value="review"
                      checked={field.value === "review"}
                      onChange={() => {
                        setValue("type", "review");
                        handleFeedbackTypeChange("review");
                      }}
                    />
                    Review
                  </label>
                  <label className="flex text-sm justify-center">
                    <input
                      className="mr-2"
                      type="radio"
                      {...field}
                      value="suggestion"
                      checked={field.value === "suggestion"}
                      onChange={() => {
                        setValue("type", "suggestion");
                        handleFeedbackTypeChange("suggestion");
                      }}
                    />
                    Suggestion
                  </label>
                  <label className="flex text-sm justify-center">
                    <input
                      className="mr-2"
                      type="radio"
                      {...field}
                      value="bug"
                      checked={field.value === "bug"}
                      onChange={() => {
                        setValue("type", "bug");
                        handleFeedbackTypeChange("bug");
                      }}
                    />
                    Bug
                  </label>
                </div>
              )}
            />
          </div>

          {/* Star Rating Input */}
          {feedbackType === "review" && ( // Only show the star rating for 'review'
            <div className="pt-4 px-4 animate">
              <h3 className="text-sm font-medium text-black-700">
                Rate your experience
              </h3>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)} // Set the rating when a star is clicked
                    className={`text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm ${
                      star <= rating
                        ? "text-yellow-400 hover:text-yellow-500"
                        : "text-gray-300 hover:text-gray-400"
                    }`}
                  >
                    <Star
                      className={`w-6 h-6 ${star <= rating ? "fill-current" : "fill-none"}`}
                    />
                    <span className="sr-only">Rate {star} stars</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Title Input */}
          <div className="pt-4 px-4 animate">
            <RHFInput name="title" label="Title" />
          </div>

          {/* Description Input */}
          <div className="pt-4 px-4 animate">
            <RHFInput name="description" label="Description" type="textarea" />
          </div>
        </FormMaker>
      </div>
    </div>
  );
}

export default FeedbackForm;

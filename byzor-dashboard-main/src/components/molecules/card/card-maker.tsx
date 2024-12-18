import { Button } from "@/components/atoms/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/atoms/card";
import React from "react";
import { Heart, UserRoundCheck, UserRoundPlus } from "lucide-react";

type CardMakerProps = {
    title?: string;
    description?: string;
    content?: React.ReactNode;
    imageUrl?: string;
    tags?: string[];
    ctaLabel?: string;
    onCtaClick?: () => void;
    secondaryCtaLabel?: string;
    onSecondaryCtaClick?: () => void;
    productType?: "product" | "store";
    isActioned?: boolean;
    onActionClick?: () => void;
};

const CardMaker: React.FC<CardMakerProps> = ({
    title,
    description,
    content,
    imageUrl,
    tags,
    ctaLabel,
    onCtaClick,
    secondaryCtaLabel,
    onSecondaryCtaClick,
    productType,
    isActioned,
    onActionClick,
}) => {
    return (
        <Card className="overflow-hidden">
            <div>
                {imageUrl && (
                    <div className="relative">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="h-48 w-full object-cover"
                        />
                    </div>
                )}
                {productType === "product" || productType === "store" ? (
                    <Button
                        onClick={onActionClick}
                        // variant={isActioned ? "primary" : "outline"}
                        className="mt-2"
                    >
                        {productType === "store" ? (
                            isActioned ? (
                                <>
                                    <UserRoundCheck className="mr-2 h-4 w-4" />
                                    Following
                                </>
                            ) : (
                                <>
                                    <UserRoundPlus className="mr-2 h-4 w-4" />
                                    Follow
                                </>
                            )
                        ) : (
                            <>
                                <Heart
                                    className={`mr-2 h-4 w-4 ${isActioned ? "text-red-500" : "text-gray-500"}`}
                                />
                                {isActioned ? "Wishlisted" : "Add to Wishlist"}
                            </>
                        )}
                    </Button>
                ) : null}
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                {tags && (
                    <div className="flex flex-wrap mt-2 gap-2">
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </CardHeader>

            <CardContent>{content}</CardContent>

            <CardFooter className="flex justify-between items-center">
                <div>
                    {ctaLabel && (
                        <Button onClick={onCtaClick} variant="default">
                            {ctaLabel}
                        </Button>
                    )}
                    {secondaryCtaLabel && (
                        <Button onClick={onSecondaryCtaClick} variant="secondary">
                            {secondaryCtaLabel}
                        </Button>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default CardMaker;

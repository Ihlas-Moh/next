import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import CardMaker from "../card/card-maker";

type TabContentMakerProps = {
    value: string;
    title: string;
    description: string;
    content: React.ReactNode;
};

const TabContentMaker: React.FC<TabContentMakerProps> = ({
    value,
    title,
    description,
    content,
}) => {
    return (
        <>
            <TabsContent value={value} className="space-y-4">
                <CardMaker title={title} description={description} content={content} />
            </TabsContent>
        </>
    );
};

export default TabContentMaker;

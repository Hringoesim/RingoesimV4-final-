import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
    description?: string;
    className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
    faqs,
    title = "Frequently Asked Questions",
    description = "Find answers to common questions about Ringo eSIM.",
    className = ""
}) => {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className={`section-padding ${className}`}>
            <div className="container-max">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                        <p className="text-lg text-gray-600">{description}</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600 transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

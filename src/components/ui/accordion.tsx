"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext<{
    activeItem: string | undefined;
    setActiveItem: (value: string | undefined) => void;
}>({
    activeItem: undefined,
    setActiveItem: () => { },
});

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: "single"; collapsible?: boolean }
>(({ className, children, ...props }, ref) => {
    const [activeItem, setActiveItem] = React.useState<string | undefined>(undefined);

    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div ref={ref} className={cn("", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("border-b", className)} data-value={value} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value });
                }
                return child;
            })}
        </div>
    );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
    const { activeItem, setActiveItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    const toggle = () => {
        setActiveItem(isOpen ? undefined : value);
    };

    return (
        <div className="flex">
            <button
                ref={ref}
                onClick={toggle}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value?: string }
>(({ className, children, value, ...props }, ref) => {
    const { activeItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    if (!isOpen) return null;

    return (
        <div
            ref={ref}
            className={cn("overflow-hidden text-sm transition-all animate-fade-in-down", className)}
            {...props}
        >
            <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </div>
    );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { personalizeIntroMessage } from "@/ai/flows/personalize-intro-message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2, Wand2 } from "lucide-react";

const formSchema = z.object({
  linkedInProfile: z.string().url({ message: "Please enter a valid LinkedIn profile URL." }),
});

export function AIIntroMessage() {
  const [personalizedMessage, setPersonalizedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      linkedInProfile: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setPersonalizedMessage("");
    try {
      const result = await personalizeIntroMessage(values);
      setPersonalizedMessage(result.personalizedMessage);
    } catch (e) {
      console.error(e);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not personalize message. Please check the URL and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="text-accent" />
          AI-Powered Introduction
        </CardTitle>
        <CardDescription>
          Paste your LinkedIn profile URL to get a personalized welcome message from me.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
            <FormField
              control={form.control}
              name="linkedInProfile"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input placeholder="https://linkedin.com/in/your-profile" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Personalizing...
                </>
              ) : (
                "Personalize"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      {personalizedMessage && (
        <CardFooter>
          <p className="text-sm text-foreground italic p-4 bg-muted/50 rounded-md border border-dashed border-accent">
            {personalizedMessage}
          </p>
        </CardFooter>
      )}
    </Card>
  );
}

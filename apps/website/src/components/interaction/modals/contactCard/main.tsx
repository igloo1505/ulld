import { Button } from "@ulld/tailwind/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ulld/tailwind/card";
import { Label } from "@ulld/tailwind/label";
import React from "react";
import CopyTextContainer from "../../copyTextContainer/main";
import staticContent from "staticContent";
import { router } from "@ulld/api";
import ClientButtonBack from "../../clientButtons/back";

interface ContactMeCardProps {
  isModal?: boolean;
}

const ContactMeCard = ({ isModal }: ContactMeCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          I will do my best to respond to all emails.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <CopyTextContainer
                id="contact-email"
                toastDescription={
                  "The email has been copied to your clipboard."
                }
                className={"text-sm"}
              >
                {staticContent.contact.email}
              </CopyTextContainer>
            </div>
          </div>
        </form>
      </CardContent>
      {isModal && (
        <CardFooter>
          <ClientButtonBack />
        </CardFooter>
      )}
    </Card>
  );
};

ContactMeCard.displayName = "ContactMeCard";

export default ContactMeCard;

"use client";
import { Button, ButtonProps } from "@ulld/tailwind/button";
import { useRouter } from "next/navigation";
import React from "react";

interface ClientButtonBackProps extends ButtonProps {
    
}

const ClientButtonBack = (props: ClientButtonBackProps) => {
  const router = useRouter();
  return (
    <Button
            variant="outline" 
            {...props}
            onClick={() => router.back()}
        >
      Back
    </Button>
  );
};

ClientButtonBack.displayName = "ClientButtonBack";

export default ClientButtonBack;

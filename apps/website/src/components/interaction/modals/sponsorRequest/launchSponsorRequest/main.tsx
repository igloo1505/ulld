import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@ulld/tailwind/dialog";
import { RootState } from "#/state/store";
import { connect } from "react-redux";
import { buttonVariants } from "@ulld/tailwind/button";
import { setModalState } from "#/state/actions/interactions";
import { LogoAsText } from "#/components/general/logoAsText";
import Link from "next/link";

const connector = connect((state: RootState, props: any) => ({
  show: state.interactions?.modals?.launchSponsorRequest,
  props: props,
}));

interface LaunchSponsorRequestModalProps {
  show: boolean;
}

const LaunchSponsorRequestModal = connector(
  ({ show }: LaunchSponsorRequestModalProps) => {
    return (
      <Dialog
        open={show}
        onOpenChange={(o) => {
          console.log("o: ", o);
          if (!o) {
            setModalState("launchSponsorRequest", false);
          }
        }}
        /* on */
      >
        <DialogContent className={"z-50 border-border !max-w-[min(768px,85vw)]"}>
          <DialogHeader>
            <DialogTitle>Just a moment...</DialogTitle>
            <DialogDescription>
              This will only display once. Please take a second to read.
            </DialogDescription>
          </DialogHeader>
          <div className={"flex flex-col justify-center items-start"}>
            <div>
              Thank you for visiting <span className={"font-semibold"}>Uh Little Less Dum</span>.
            </div>
            <div className={"mt-1 px-4"}>
              <span className={"w-4 inline-block"} />
              <div className={"inline"}>
                As the creator of <LogoAsText />, my hope for this project is
                two-fold.
              </div>
              <div className={"indent-4"}>
                First, I aim to create an app that is simple enough to be used
                by middle school students, yet has the extensibility and
                capabilities to suit the needs of professional academics.
              </div>
              <div className={"indent-4"}>
                Second, I hope to build a platform that is capable of sharing
                academic work with the world for both the sharing of ideas and
                greater collaboration.
              </div>
              <div>
                <span className={"w-4 inline-block"} />
                <div className={"inline"}>
                  While future growth might include paid access to machine
                  learning servers and third party platforms, <LogoAsText />{" "}
                  will{" "}
                  <span
                    className={
                      "font-bold italic underline underline-offset-2 decoration-yellow-500"
                    }
                  >
                    always
                  </span>{" "}
                  be free, and free, community provided options for this same functionality running locally will <span
                    className={
                      "font-bold italic underline underline-offset-2 decoration-yellow-500"
                    }
                  >
                    never
                  </span> be prohibited. Money should never be an issue for somebody trying to study.
                </div>
              </div>
              <div>
                <span className={"w-4 inline-block"} />
                <div className={"inline"}>
                  This project was started as a personal note taking app that
                  grew as I went about my own research attempting to more thoroughly unify gravity and time. You can see a summary of my
                  own research{" "}
                  <Link className={"text-link"} href="/notes">
                    here
                  </Link>
                  , but most of all you can learn more about the motivations,
                  plans and timeline for <LogoAsText /> at the button below.
                </div>
              </div>
            <div className={"text-sm text-muted-foreground mt-2"}>If you can, please consider sponsoring this project <Link className={"text-link"} href="/sponsor">here</Link>. In the pursuit of my own research I became homeless almost 2 years ago, and have spent that time trying to finalize my own paper while building <LogoAsText fontSize={13}/> and living in my car with my puppy, often without food, gas or clean clothes.
            </div>
            </div>
            <div className={"w-full px-4 mt-4 flex flex-row justify-between items-center"}>
              <div className={"w-fit flex flex-col justify-center items-start"}>
                <div>Thank you,</div>
                <div className={"pl-4"}>Andrew</div>
              </div>
              <div>
                <Link href="/story" className={buttonVariants()}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  },
);

LaunchSponsorRequestModal.displayName = "LaunchSponsorRequestModal";

export default LaunchSponsorRequestModal;

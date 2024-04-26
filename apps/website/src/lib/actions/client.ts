declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    'cancel-landing-typing': CustomEvent,
    'resume-landing-typing': CustomEvent,
  }
}

export const cancelLandingTyping = () => {
   window.dispatchEvent(new Event("cancel-landing-typing"))
}



export const resumeLandingTyping = () => {
   window.dispatchEvent(new Event("resume-landing-typing"))
}

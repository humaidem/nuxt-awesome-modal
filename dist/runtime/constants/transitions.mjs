export const scaleTransition = {
  enterFromClass: "scale-down",
  enterToClass: "scale-up",
  leaveFromClass: "scale-up",
  leaveToClass: "scale-down",
  enterActiveClass: "transition-scale ease-out duration-200",
  leaveActiveClass: "transition-scale ease-in duration-200"
};
export const fadeTransition = {
  enterFromClass: "opacity-0",
  enterToClass: "opacity-100",
  leaveFromClass: "opacity-100",
  leaveToClass: "opacity-0",
  enterActiveClass: "transition-opacity ease-out duration-200",
  leaveActiveClass: "transition-opacity ease-in duration-200"
};
export const slideFromBottomTransition = {
  enterFromClass: "transform y-full",
  enterToClass: "transform y-0",
  leaveFromClass: "transform y-0",
  leaveToClass: "transform y-full",
  enterActiveClass: "transition-transform ease-out duration-200",
  leaveActiveClass: "transition-transform ease-in duration-200"
};
export const slideFromTopTransition = {
  enterFromClass: "transform -y-full",
  enterToClass: "transform y-0",
  leaveFromClass: "transform y-0",
  leaveToClass: "transform -y-full",
  enterActiveClass: "transition-transform ease-out duration-200",
  leaveActiveClass: "transition-transform ease-in duration-200"
};
export const slideFromRightTransition = {
  enterFromClass: "transform ltr:x-full rtl:-x-full",
  enterToClass: "transform x-0",
  leaveFromClass: "transform x-0",
  leaveToClass: "transform rtl:x-full rtl:-x-full",
  enterActiveClass: "transition-transform ease-out duration-200",
  leaveActiveClass: "transition-transform ease-in duration-200"
};
export const slideFromLeftTransition = {
  enterFromClass: "transform ltr:-x-full rtl:x-full",
  enterToClass: "transform x-0",
  leaveFromClass: "transform x-0",
  leaveToClass: "transform ltr:-x-full rtl:x-full",
  enterActiveClass: "transition-transform ease-out duration-200",
  leaveActiveClass: "transition-transform ease-in duration-200"
};

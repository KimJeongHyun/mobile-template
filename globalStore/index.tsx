import create from "zustand";

type HeadState = {
  text: string;
  isValidBackButton: boolean;
  isValidCloseButton: boolean;
};

type HeadAction = {
  updateText: (value: HeadState["text"]) => void;
  updateValidateBack: (value: boolean) => void;
  updateValidateClose: (value: boolean) => void;
  reset: () => void;
};

const initialState: HeadState = {
  text: "",
  isValidBackButton: false,
  isValidCloseButton: true,
};

// set 함수를 통해서만 상태를 변경할 수 있다
export const useHeadStore = create<HeadState & HeadAction>((set) => ({
  ...initialState,
  updateText: (value) => set(() => ({ text: value })),
  updateValidateBack: (value) => set(() => ({ isValidBackButton: value })),
  updateValidateClose: (value) => set(() => ({ isValidCloseButton: value })),
  reset: () => {
    set(initialState);
  },
}));

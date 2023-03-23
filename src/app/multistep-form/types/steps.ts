interface StepControlConfig {
  label: string;
  action: () => void;
  disabled?: boolean;
  isSubmit?: boolean;
}

interface Step {
  path: string;
  name: string;
}

export type { StepControlConfig, Step };

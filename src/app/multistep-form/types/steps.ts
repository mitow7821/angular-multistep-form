interface StepControlConfig {
  label: string;
  action: () => void;
  disabled?: boolean;
}

interface Step {
  path: string;
  name: string;
}

export type { StepControlConfig, Step };

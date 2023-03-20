interface StepControlConfig {
  label: string;
  action: () => void;
  disabled?: boolean;
}

export type { StepControlConfig };

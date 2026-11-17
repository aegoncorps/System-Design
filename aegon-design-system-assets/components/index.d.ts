// Aegon — tipos dos componentes (documentação). Global: window.Aegon. Requer React 18.
type Tone = "neutral" | "success" | "warning" | "danger" | "info" | "scenario";
type StatusKey = "draft" | "pending" | "committed" | "approved" | "paid" | "exception" | "scenario" | "cancelled";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger"; size?: "sm" | "md" | "lg";
  icon?: IconName; iconRight?: IconName; loading?: boolean; children: React.ReactNode;
}
export interface OnSwitchProps { checked?: boolean; defaultChecked?: boolean; onChange?: (next: boolean) => void; label?: string; disabled?: boolean; }
export interface BadgeProps { status?: StatusKey; tone?: Tone; icon?: IconName | false; children?: React.ReactNode; }
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string; prefix?: string; suffix?: string; required?: boolean; }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label?: string; hint?: string; error?: string; placeholder?: string; options: Array<string | { value: string; label: string }>; }
export interface TabsProps { items: Array<{ value: string; label: string; count?: number }>; value?: string; defaultValue?: string; onChange?: (value: string) => void; }
export interface CardProps { title?: string; subtitle?: string; actions?: React.ReactNode; children?: React.ReactNode; }
export interface KpiCardProps { label: string; value: string; delta?: string; tone?: Exclude<Tone, "scenario">; hint?: string; progress?: number; }
export interface DataTableColumn<R> { key: string; label: string; align?: "left" | "right"; render?: (row: R) => React.ReactNode; }
export interface DataTableProps<R = any> { columns: DataTableColumn<R>[]; rows: R[]; caption?: string; }
export interface ApprovalCardProps { kind: string; title: string; impact?: string; attachment?: string; sla?: string; onApprove?: () => void; onReturn?: () => void; onContext?: () => void; }
export interface StepperProps { steps?: string[]; current?: number; }
export interface AlertProps { tone?: Exclude<Tone, "neutral">; title?: string; children?: React.ReactNode; action?: React.ReactNode; }
export interface EmptyStateProps { title: string; description?: string; action?: React.ReactNode; pattern?: "creme" | "azul"; }
export interface AppShellProps { nav: Array<{ label: string; items: Array<{ value: string; label: string; icon?: IconName; badge?: number }> }>; active?: string; onNavigate?: (value: string) => void; product?: string; eyebrow?: string; title: string; actions?: React.ReactNode; children?: React.ReactNode; }
export interface LogoProps { variant?: "positivo" | "negativo" | "escuro" | "mono-branco"; height?: number; }
export type IconName = "layout-dashboard" | "wallet" | "receipt" | "circle-check" | "file-text" | "package" | "laptop" | "bar-chart-3" | "shield-check" | "building-2" | "users" | "settings" | "search" | "bell" | "plus" | "arrow-right" | "chevron-right" | "chevron-down" | "x" | "triangle-alert" | "info" | "clock" | "filter" | "download" | "calendar" | "power" | "menu" | "log-out" | "landmark" | "check";
export interface IconProps { name: IconName; size?: 16 | 18 | 20 | 24; strokeWidth?: number; label?: string; }

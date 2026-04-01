import {
  Clapperboard,
  Layers3,
  Megaphone,
  PenTool,
  Search,
  Shield,
  Sparkles,
  Users
} from "lucide-react";

import type { ServiceIconName } from "@/lib/services";

type ServiceIconProps = {
  name: ServiceIconName;
  className?: string;
};

const iconMap = {
  "pen-tool": PenTool,
  megaphone: Megaphone,
  users: Users,
  sparkles: Sparkles,
  shield: Shield,
  search: Search,
  clapperboard: Clapperboard,
  "layers-3": Layers3
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = iconMap[name];

  return <Icon className={className} strokeWidth={1.8} />;
}

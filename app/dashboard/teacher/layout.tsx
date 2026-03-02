import type { ReactNode } from "react";
import { DashboardShell } from "../../../components/layout/DashboardShell";

export default function TeacherDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <DashboardShell role="teacher">{children}</DashboardShell>;
}


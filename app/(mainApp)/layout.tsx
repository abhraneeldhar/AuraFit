import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import styles from "./dashboard/dashboard.module.css"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={styles.childMain}>
        {children}
      </main>
    </SidebarProvider>
  )
}

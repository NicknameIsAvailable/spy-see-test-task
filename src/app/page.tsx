import Button from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={"/notifications"}>
        <Button size="md" variant="primary">
          Посмотреть уведомления
        </Button>
      </Link>
    </div>
  );
}

import MailForm from "@/components/MailForm/MailForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-semibold text-2xl">お問い合わせフォーム</h2>
      <MailForm />
    </div>
  );
}

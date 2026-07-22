import { DropZoneCard } from "@/features/dropzone";
import { EncryptionActions } from "@/features/encryption";
import { FileListCard } from "@/features/file-list";
import { PasswordCard } from "@/features/password";

export default function Home() {
  return (
    <section>
      <DropZoneCard />
      <FileListCard />
      <PasswordCard />
      <EncryptionActions />
    </section>
  );
}
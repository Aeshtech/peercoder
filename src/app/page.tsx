import Image from "next/image";
import Header from "./components/header";
import VideosWrapper from "./components/videos-wrapper";
import EditorToolbar from "./components/editor-toolbar";
import Editor from "./components/editor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideosWrapper />
      <EditorToolbar />
      <Editor />
    </main>
  );
}

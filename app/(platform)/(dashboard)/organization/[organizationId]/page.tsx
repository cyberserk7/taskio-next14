
import { db } from "@/lib/db";
import { DeleteBoard } from "./board";
import { Form } from "./form";

export default async function OrgIdPage() {
  const boards = await db.board.findMany()

  return (
    <div className="flex flex-col space-y-4">
        <Form />
        <div className="space-y-2"> 
          {boards.map((board) => (
            // <div key={"board.id"}>
            //   Board title: {board.title}
            // </div>
            <DeleteBoard title={board.title} id={board.id} key={board.id} />
          ))}
        </div>
    </div>
  );
}

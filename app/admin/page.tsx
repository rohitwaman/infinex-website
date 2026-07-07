import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "../../lib/supabaseAdmin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function deleteContact(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));

  await supabaseAdmin.from("Contact").delete().eq("id", id);

  revalidatePath("/admin");
}

export default async function AdminPage() {
  const { data: contacts, error } = await supabaseAdmin
    .from("Contact")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("Admin fetch error:", error);
  }

  const inquiries = contacts || [];

  return (
    <main className="min-h-screen bg-slate-950 p-10 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-blue-400">Admin Dashboard</h1>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-2xl font-bold">
            Total Inquiries: {inquiries.length}
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-800">
          <table className="w-full bg-slate-900">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Message</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {inquiries.map((contact) => (
                <tr key={contact.id} className="border-t border-slate-800">
                  <td className="p-4">{contact.name}</td>
                  <td className="p-4 text-slate-300">{contact.email}</td>
                  <td className="p-4 text-slate-300">{contact.message}</td>
                  <td className="p-4 text-slate-400">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <form action={deleteContact}>
                      <input type="hidden" name="id" value={contact.id} />
                      <button className="rounded-lg bg-red-600 px-4 py-2 font-semibold hover:bg-red-700">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              ))}

              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-slate-400">
                    No inquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
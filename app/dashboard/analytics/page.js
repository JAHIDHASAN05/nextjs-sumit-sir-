import Button from "@/app/components/Button";
import error from "../error";

export const metadata = {
    title: "Analytics Page",
    description: "This is our analytics page",
};

export default function Analytics() {

    throw new Error('a;dlkfja;sdl')
    return (
        <div className="p-4">
            <h1 className="text-2xl">Analytics page</h1>

            <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam accusantium dolor at veniam doloribus, delectus
                repellendus iste. Quis explicabo voluptatem in ea nisi! Pariatur
                molestiae tenetur reiciendis, atque tempore quis!
            </p>

            <Button path='/dashboard/settings'>Go to settings page</Button>
        </div>
    );
}

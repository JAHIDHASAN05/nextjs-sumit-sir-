import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export default function Settings() {
    console.log("Rendering settings page");
    return (
        <div className="p-4">
            <h1 className="text-2xl">Settings page</h1>

            <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam accusantium dolor at veniam doloribus, delectus
                repellendus iste. Quis explicabo voluptatem in ea nisi! Pariatur
                molestiae tenetur reiciendis, atque tempore quis!
            </p>

            <Button path='/dashboard/analytics'>Go to analytics page</Button>
            <Suspense>
            <SortProducts/>
            </Suspense>
        </div>
    );
}

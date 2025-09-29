import Image from "next/image";

export default function UserInfo() {
    return (
        <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <Image
                src="https://avatar.iran.liara.run/public"
                alt="avatar"
                width={32}
                height={32}
                className="size-8 rounded-full"
            />
            <span className="hidden sm:inline text-sm text-gray-700">Welcome, Vovan</span>
        </div>
    );
}

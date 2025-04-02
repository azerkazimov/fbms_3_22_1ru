import { CommandGroup } from "@/components/ui/command";

export default function SearchResult({results}) {
    return (
        <CommandGroup heading="Products">
            <span>{results}</span>
        </CommandGroup>
    );
}
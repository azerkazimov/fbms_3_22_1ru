"use client";

import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandList } from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import SearchSuggestion from "./search-suggestion";
import SearchResult from "./search-result";
import { searchProducts } from "@/components/utils/actions/search-products";
import { ProductCardProps } from "@/types/interfaces/product-card-props";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (searchQuery) {
        (async () => {
          try {
            const result = await searchProducts();
            setSearchResult(result);
          } catch (error) {
            console.error("Error fetching search results:", error);
          }
        })();
      }
    }, 300);

    return () => clearTimeout(timeId);
  }, [searchQuery]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <div className="flex items-center gap-3">
            <Search />
            <span>Search products ...</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Search Product</DialogTitle>
        <Command>
          <CommandInput
            placeholder="Type somethign for search"
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            {searchQuery.trim() === "" ? (
              <SearchSuggestion />
            ) : (
              <SearchResult results={searchResult} />
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

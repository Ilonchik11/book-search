import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

const searchFields = [
  { value: "title", label: "Title" },
  { value: "author", label: "Author" },
  { value: "subject", label: "Subject" },
];

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "new", label: "Newest" },
];

const languages = [
  { value: "", label: "Any language" },
  { value: "eng", label: "English" },
  { value: "ukr", label: "Ukrainian" },
  { value: "deu", label: "German" },
  { value: "fra", label: "French" },
];

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [searchField, setSearchField] = useState("title");
  const [sort, setSort] = useState("relevance");
  const [language, setLanguage] = useState("");
  const [year, setYear] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    onSearch({
      query: input.trim(),
      searchField,
      sort,
      language,
      year,
    });
  };

  return (
    <form
      className="flex flex-col gap-4 items-center w-full"
      onSubmit={handleSearch}
    >
      <div className="flex items-center gap-4 w-full max-w-3xl border border-purple-600 rounded-4xl p-4">
        <input
          type="search"
          placeholder="Search for books..."
          value={input}
          aria-label="Search for books"
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-gray-800 outline-none placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="border-none bg-transparent cursor-pointer"
        >
          <SearchIcon className="w-8 h-8 shrink-0 text-purple-600" />
        </button>
      </div>

      <div className="flex flex-wrap gap-4 px-2 py-1 outline-none">
        <label
          htmlFor="searchField"
          className="flex items-center gap-2 text-sm"
        >
          <span className="text-purple-600">Search by:</span>
          <select
            id="searchField"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="rounded-md border border-gray-300 px-2 py-1 outline-none"
          >
            {searchFields.map((field) => (
              <option key={field.value} value={field.value}>
                {field.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="sort" className="flex items-center gap-2 text-sm">
          <span className="text-purple-600">Sort:</span>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-md border border-gray-300 px-2 py-1 outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="language" className="flex items-center gap-2 text-sm">
          <span className="text-purple-600">Language:</span>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-md border border-gray-300 px-2 py-1 outline-none"
          >
            {languages.map((language) => (
              <option key={language.value} value={language.value}>
                {language.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="year" className="flex items-center gap-2 text-sm">
          <span className="text-purple-600">Year:</span>
          <input
            id="year"
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            min="1"
            max={new Date().getFullYear()}
            className="w-24 rounded-md border border-gray-300 px-2 py-1 outline-none"
          />
        </label>
      </div>
    </form>
  );
};

export default SearchBar;

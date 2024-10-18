import { Fragment } from "react/jsx-runtime";
import { StayFilter } from "./components/ stay-filter";
import { SearchForStays } from "./components/search-for-stays";

export const Home = () => {
  return (
    <Fragment>
      <StayFilter />

      <div className="flex container mx-auto flex-col gap-12">
        <SearchForStays />
      </div>
    </Fragment>
  );
};

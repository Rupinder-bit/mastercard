
import React from "react";
import TextInput from "./TextInput";
import { IsearchForm } from "../../states/SearchGitHubUsersState";

type HtmlEvent = React.ChangeEvent<HTMLInputElement>
type BtnEvent = React.MouseEvent<HTMLButtonElement>

interface Props {
    handleChange: React.EventHandler<HtmlEvent>;
    searchForm: IsearchForm;

}

const SearchForm: React.FC<Props> = ({ searchForm, handleChange }) => {
    return (
        <div className="form">
            <TextInput
                label="Search For Git hub Users"
                name="searchQuery"
                type="text"
                value={searchForm.searchQuery}
                onChange={handleChange}
                placeholder="Enter minimum 3 characters ..."
                required={true}
            />
        </div >
    )
}

export default SearchForm;
import React from "react";
import App from "../App";
import Episodes from "../components/Episodes";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";

jest.mock("../api/fetchShow");

const episodesData = {
    data: []
}

test ("App component renders without error", async ()=>{

    mockFetchShow.mockResolvedValueOnce(episodesData);

    render(<App />);

    expect(screen.getByText( /Fetching Data/i )).toBeInTheDocument();

    waitFor(async ()=>{
        await screen.findByText(/Stranger Things/i);

        expect(screen.getByText(/Select A Season/i));
    })
})
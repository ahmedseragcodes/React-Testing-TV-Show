import React from "react";
import App from "../App";
import Episodes from "../components/Episodes";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";

jest.mock("../api/fetchShow");

const episodesData = 
[
    {id:553946,url:"https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",name:"Chapter One: The Vanishing of Will Byers",season:1,number:1,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"},summary:"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/553946"}}},
    {id:578663,url:"https://www.tvmaze.com/episodes/578663/stranger-things-1x02-chapter-two-the-weirdo-on-maple-street",name:"Chapter Two: The Weirdo on Maple Street",season:1,number:2,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/72/181376.jpg"},summary:"<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/578663"}}},
    {id:578664,url:"https://www.tvmaze.com/episodes/578664/stranger-things-1x03-chapter-three-holly-jolly",name:"Chapter Three: Holly, Jolly",season:1,number:3,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/67/168920.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/67/168920.jpg"},summary:"<p>While Nancy looks for a missing Barbara and realizes that Jonathan may have been the last person to see her, Mike and his friends go out with Jane to find the missing Will. Meanwhile, Jim tracks Will to the lab.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/578664"}}},
    {id:578665,url:"https://www.tvmaze.com/episodes/578665/stranger-things-1x04-chapter-four-the-body",name:"Chapter Four: The Body",season:1,number:4,type:"regular",airdate:"2016-07-15",airtime:"",airstamp:"2016-07-15T12:00:00+00:00",runtime:60,image:{medium:"https://static.tvmaze.com/uploads/images/medium_landscape/67/168921.jpg",original:"https://static.tvmaze.com/uploads/images/original_untouched/67/168921.jpg"},summary:"<p>Jim realizes that the government is covering something up about Will's death and begins a personal investigation. Meanwhile, Nancy discovers that Jonathan has information about Barbara's disappearance, while Mike and his friends smuggle Jane into the school so she can use the ham radio to contact Will.</p>",_links:{self:{href:"https://api.tvmaze.com/episodes/578665"}}},
];
test ("App component renders base show information following API call", async ()=>{

    mockFetchShow.mockResolvedValueOnce(episodesData);

    render(<App />);

    expect(screen.getByText( /Fetching Data/i )).toBeInTheDocument();

    waitFor(async ()=>{
        await screen.findByText(/Stranger Things/i);

        expect(screen.getByText(/Select A Season/i));
    })
})

test ("Episodes Appear After Season Is Selected", ()=>{

    const { rerender }=render(<Episodes episodes={[]}/>)

    expect(screen.queryByText(/Chapter One/i)).toBeNull();

    rerender(<Episodes episodes={episodesData} />);

    expect(screen.getByText(/Chapter One/i)).toBeInTheDocument();

    expect(screen.getByText(/Chapter Two/i)).toBeInTheDocument();


})
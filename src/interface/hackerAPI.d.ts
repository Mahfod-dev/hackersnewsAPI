// Generated by https://quicktype.io

export interface HackerAPI {
    hits:                Hit[];
    nbHits:              number;
    page:                number;
    nbPages:             number;
    hitsPerPage:         number;
    exhaustiveNbHits:    boolean;
    exhaustiveTypo:      boolean;
    exhaustive:          Exhaustive;
    query:               string;
    params:              string;
    processingTimeMS:    number;
    processingTimingsMS: ProcessingTimingsMS;
    serverTimeMS:        number;
}

export interface Exhaustive {
    nbHits: boolean;
    typo:   boolean;
}

export interface Hit {
    created_at:       string;
    title:            string;
    url:              string;
    author:           string;
    points:           number;
    story_text:       null;
    comment_text:     null;
    num_comments:     number;
    story_id:         null;
    story_title:      null;
    story_url:        null;
    parent_id:        null;
    created_at_i:     number;
    relevancy_score?: number;
    _tags:            string[];
    objectID:         string;
    _highlightResult: HighlightResult;
}

export interface HighlightResult {
    title:  Author;
    url:    Author;
    author: Author;
}

export interface Author {
    value:             string;
    matchLevel:        MatchLevel;
    matchedWords:      Query[];
    fullyHighlighted?: boolean;
}

export enum MatchLevel {
    Full = "full",
    None = "none",
}

// export enum Query {
//     React = "react",
// }

export interface ProcessingTimingsMS {
    afterFetch: AfterFetch;
    fetch:      Fetch;
    request:    Request;
    total:      number;
}

export interface AfterFetch {
    total: number;
}

export interface Fetch {
    scanning: number;
    total:    number;
}

export interface Request {
    roundTrip: number;
}

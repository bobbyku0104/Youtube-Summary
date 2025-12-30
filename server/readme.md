# YouTube Summary Backend

- Youtube link -> Trancript
- Transcript -> Summary
- Summary to RAG (VectorDB)
- Feed to AI as context

### ROUTES

Get Video Summary

```
GET http://localhost:8080/summary/{videoId}
```

Response

```
{
    "status": "success",
    "message": "summarized successfully",
    "data": {
        "videoSummary": {
            "title": "Surviving 30 Days 100ft Up for $250,000",

            "overall_summary": "Two strangers, Alison (a construction worker) and Angus (a UK reality TV star), are trapped",

            "key_takeaways": [
                "Extreme environments and high stakes significantly amplify mental and physical pressure, affecting performance and decision-making.",
                "The importance of perseverance and strategic thinking, especially when"
            ],
            "key_points": [
                "Two strangers, Alison and Angus, were challenged to survive 30 days 100 ft in the air for a $250,000 prize.",
                "Failing challenges resulted in a quarter of their platform being removed, creating progressively dangerous and confined living conditions.",
                "Angus failed two crucial challenges (tennis ball target for tents and button-pressing for food), leading to significant platform loss and food deprivation.",

            ],
            "conclusion": "Alison successfully survived the 30-day challenge, demonstrating remarkable resilience and strategic decision-making. Despite losing her partner and enduring immense physical and psychological hardship, she secured her $250,000 prize and an additional $50,000 gift card, choosing a guaranteed win over the high-risk pursuit of doubling her earnings, a decision proven prudent by her later struggles on the balance beam."
        },
        "transcript" : "Take off your blindfolds! I just trapped\nthese two strangers 100 ft in the air, and if they can ;#39;t even cry when I fell! How is this more sad? [laughs] Oh, I hate this decision. Alison! We support whatever you..."
    }
}

```

Transcript should be passed with QnA asked by user in chat

### Chat with AI

```
POST
http://localhost:8080/ask

body : {
    question : "who won the challenge",
    transcript : "VideoTranscriptHere"
}
```

Response
```
{
    "status": "success",
    "message": "question answered",
    "data": {
        "question": "who won the challenge",
        "answer": "Alison won the challenge and received $250,000, along with a $50,000 Starbucks gift card.",
        "confidence": "high",
        "supporting_evidence": [
            "Alison, I need a decision. Do you want to leave with a guaranteed 250,000, plus your $50,000 Starbucks gift card?",
            "Nolan, you gotta drop the check! -You sure, what? -I'm sure.",
            "Which means you officially won that quarter of a million dollars!",
            "And with that, Alison has won $250,000!"
        ],
        "not_found": false //true if asked out of the video 
    }
}
```

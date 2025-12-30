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
        "title": "Stranded 100 Ft Up: 30-Day Survival Challenge",
        "overall_summary": "This video details a 30-day survival challenge where two strangers, Alison (a construction worker) and Angus (a reality TV star), are trapped 100 feet in the air on a shrinking platform, competing for a $250,000 prize. They endure harsh weather, dwindling resources, and increasing isolation. Angus struggles with the conditions and challenges, eventually falling from a balance beam and being eliminated. Alison continues alone, facing daily tasks that further reduce her living space. In the end, she secures her guaranteed $250,000 prize and an additional $50,000 gift card, opting out of a final risky balance beam challenge to double her winnings, a decision later validated when she attempts it for fun and nearly falls.",

        "key_takeaways": [
            "Extreme high-stakes challenges expose individual strengths and weaknesses, testing both physical endurance and mental fortitude under pressure.",
            "The incentive structure of competitive challenges can create tension and strategic decision-making, even between partners.",
            "Prioritizing a guaranteed substantial gain over a risky, larger reward can be the most prudent path to success, especially when facing significant personal risk."
        ],

        "key_points": [
            "The challenge involved two participants, Alison and Angus, living on a small platform 100 feet in the air for 30 days, competing for $250,000, with the prize going entirely to the sole survivor if one quits or falls.",
            "Participants faced several challenges throughout the 30 days, many of which, particularly due to Angus's failures (e.g., target shooting, a 24-hour saw button vigil), resulted in the loss of platform space and valuable amenities like improved tents and food.",
            "Angus was eliminated on Day 15 after failing a perilous balance beam challenge, leaving Alison alone to face the remaining days and further daily challenges (shooting balloons to prevent platform loss), eventually securing her guaranteed $250,000 and a $50,000 gift card by refusing to risk it all on the same balance beam challenge for a doubled prize.",
            "Alison's final decision to take the guaranteed prize, rather than risking it all on the balance beam, was proven wise when she attempted the beam post-challenge and nearly fell, highlighting the dangers of ego in high-stakes situations."
        ],

        "conclusion": "Alison successfully navigated 30 days of extreme survival, securing $250,000 and a $50,000 gift card. Her ultimate decision to accept a guaranteed substantial prize over a high-risk attempt to double it demonstrated a pragmatic approach to the challenge, affirming the value of sensible choices under pressure."
    }
}

```

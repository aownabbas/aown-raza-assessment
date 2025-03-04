import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Paper, List, ListItem, ListItemText, CircularProgress, Typography } from "@mui/material";
import "./searchBar.css"; // Import CSS for styling

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/users/search?q=${query}`);
        setSuggestions(response.data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
    };

    // Debouncing API Call
    const delayDebounce = setTimeout(() => {
      fetchUsers();
    }, 500); // Delay API call by 500ms

    return () => clearTimeout(delayDebounce); // Cleanup on unmount or query change
  }, [query]);

  return (
    <div className="search-container">
      <Typography variant="h4" className="search-heading">
        Search Users
      </Typography>

      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        style={{marginTop:"25px"}}
      />

      {loading && <CircularProgress size={24} className="loading-spinner" />}

      {suggestions.length > 0 && (
        <Paper className="suggestions-box">
          <List>
            {suggestions.map((user) => (
              <ListItem key={user.id} className="suggestion-item">
                <ListItemText primary={`${user.firstName} ${user.lastName}`} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;

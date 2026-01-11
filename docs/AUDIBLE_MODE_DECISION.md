# Audible Mode Implementation Decision

## Overview

This document outlines the design decision for implementing the Audible Mode feature in the HaoHaoXueXi platform.

## Decision: Context-Aware Floating Audio Player

**Chosen Approach:** Context-aware pop-out audio player that appears when Audible Mode is activated on any content page.

## Rationale

### Why Context-Aware Player (Option 2)?

1. **Better UX**

   - Users can read and listen simultaneously
   - No need to navigate away from current content
   - Audio matches the visible content automatically

2. **Intuitive**

   - Click "Audible Mode" → Audio for current page plays
   - Natural workflow: Read about "Selection Sort" → Listen to "Selection Sort" audio

3. **Context Preservation**

   - Maintains user's reading position
   - Keeps visual and audio content synchronized
   - Better learning experience

4. **Flexible UI**
   - Floating player doesn't block content
   - Can be minimized/maximized
   - Can be positioned (bottom-right, bottom-center, etc.)

### Why Not Separate Page (Option 1)?

- **Loses Context**: User navigates away from content
- **Less Intuitive**: Requires finding the right audio manually
- **Disruptive**: Breaks the reading flow

## Implementation Plan

### Primary Feature: Context-Aware Player

**Components:**

1. **AudibleModeContext** - Manages audible mode state
2. **AudioPlayer Component** - Floating audio player UI
3. **Audio Content Mapping** - Maps routes to audio files
4. **Auto-detection** - Automatically loads audio for current page

**Features:**

- Floating/minimizable player
- Play/pause controls
- Progress bar
- Speed control (0.5x, 1x, 1.5x, 2x)
- Volume control
- Auto-play when mode is activated
- Shows current page title/topic

**UI Design:**

- Position: Bottom-right corner (or bottom-center)
- Minimized: Small control bar
- Expanded: Full player with controls
- Non-intrusive: Doesn't block content

### Secondary Feature: Audio Library (Future)

- Browse all available audio content
- Playlists/collections
- Offline downloads
- Accessible from main menu or player

## Technical Implementation

### File Structure

```
contexts/
  AudibleModeContext.tsx
components/
  audio/
    AudioPlayer.tsx
lib/
  utils/
    audio.ts (audio file mapping)
```

### Audio File Mapping

- Audio files stored in: `public/audio/` or `content/audio/`
- Mapping: Route → Audio file path
- Example: `/basics/10-sorting-algorithms/explore-selection-sort` → `audio/basics/10-sorting-algorithms/explore-selection-sort.mp3`

### State Management

- `isAudibleMode`: boolean (active/inactive)
- `currentAudio`: string (current audio file path)
- `isPlaying`: boolean
- `currentTime`: number
- `duration`: number

## User Flow

1. User navigates to a content page (e.g., "Explore Selection Sort")
2. User clicks "Audible Mode" button in header
3. Audio player appears (floating, bottom-right)
4. Audio for current page automatically loads and can be played
5. User can read content while listening
6. User can minimize player to small control bar
7. User clicks "Exit Audible Mode" → Player closes

## Future Enhancements

1. **Audio Library Page** - Browse all audio content
2. **Playlists** - Create custom audio playlists
3. **Offline Mode** - Download audio for offline listening
4. **Transcripts** - Show transcript alongside audio
5. **Bookmarks** - Save audio positions
6. **Speed Presets** - Remember preferred playback speed
7. **Background Play** - Continue playing when navigating

## Decision Date

December 28, 2024

## Status

✅ Decision Made - Ready for Implementation

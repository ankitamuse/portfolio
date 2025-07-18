# Resume File

## Current Status
The portfolio currently uses a text-based resume file (`resume.txt`) created from your provided information.

## To Update with Your PDF Resume

1. **Add your PDF resume** to this `public` folder
2. **Name it** `resume.pdf` 
3. **Update the download links** in:
   - `components/Hero.tsx` (line ~45)
   - `components/Contact.tsx` (line ~125)

Change from:
```jsx
href="/resume.txt"
download="Ankita_Sharma_Resume.txt"
```

To:
```jsx
href="/resume.pdf"
download="Ankita_Sharma_Resume.pdf"
```

## Files in this directory
- `resume.txt` - Text version created from your provided information
- `resume.pdf` - (Add your actual PDF resume here)

The text version will work for now, but a PDF will look more professional for downloads.

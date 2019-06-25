sample_document = Document.create!

# First 2 pages with 2 checkboxes each one
2.times do
  page = sample_document.pages.create!
  2.times { page.checkboxes.create! }
end

# Then 3 empty pages
3.times { sample_document.pages.create! }
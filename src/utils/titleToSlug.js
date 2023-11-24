function titleToSlug(title) {
  // Remove leading and trailing whitespaces
  const trimmedTitle = title.trim();

  // Convert to lowercase
  const lowercaseTitle = trimmedTitle.toLowerCase();

  // Replace spaces and special characters with hyphens
  const slug = lowercaseTitle.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");

  return slug;
}

export default titleToSlug;

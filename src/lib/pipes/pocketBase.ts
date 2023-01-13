export const PbImg = (collectionId, recordId, filename) => {
  const url = `${
    import.meta.env.VITE_PB_URL
  }api/files/${collectionId}/${recordId}/${filename}`;

  return url;
};

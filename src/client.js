import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "bfobfh3l",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skcMoelTJE0hgDlullEMMeC4RjH9P5KGmnfGyEUCQqPD5jSs6AjzlAvQBvgYC1rx0XEJ0j9y2vVs0k2KlVm9aCmkMmeIrlLye4Bu9mUdhu6ByNZBQR2Z4SjNYjIpKYdMHf2WIDAk4r3MiKjB1Be3G7ZNVAUyKA9lfS3vlTHAxWhfKr0MsIwD",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

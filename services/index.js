import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					cursor
					node {
						author {
							bio
							id
							name
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
		query GetPostsDetails {
			posts(last: 3, orderBy: createdAt_ASC) {
				title
				featuredImage {
					url
				}
				slug
				createdAt
			}
		}
	`;

	const result = await request(graphqlAPI, query);
	return result.posts;
};

export const getSimilarPosts = async (categories, slug) => {
	const query = gql`
		query GetPostsDetails($slug: String!, $categories: [String!]) {
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug, categories });
	return result.posts;
};

export const getCategories = async () => {
	const query = gql`
		query GetGategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);
	return result.categories;
};

export const getCategoriesPosts = async (slug) => {
	const query = gql`
		query GetCategoryPosts($slug: String!) {
			postsConnection(where: { categories_some: { slug: $slug } }) {
				edges {
					cursor
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						slug
						title
						excerpt
						createdAt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;
	const result = await request(graphqlAPI, query, { slug });
	return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				title
				excerpt
				featuredImage {
					url
				}
				author {
					name
					bio
					photo {
						url
					}
				}
				createdAt
				slug
				content {
					raw
				}
				categories {
					name
					slug
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query, { slug });

	return result.post;
};

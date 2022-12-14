import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
	const {
		method,
		query: { id },
		body,
	} = req;

	const { db } = await connectToDatabase();
	if (method === "DELETE") {
		try {
			await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
			res.status(200).json({ message: "The post has been deleted!!" });
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === "PUT") {
		try {
			console.log(db);
			await db.collection("posts").updateOne(
				{ _id: ObjectId(id) },
				{
					$set: {
						...body,
					},
				},
				{ upsert: true }
			);
			res.status(200).json({ message: "The post has been UPDATED!!" });
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

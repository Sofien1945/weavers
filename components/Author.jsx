import Image from "next/image";

const grpahCMSImageLoader = ({ src }) => src;

const Author = ({ publisher }) => (
	<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black/20">
		<div className="absolute left-0 right-0 -top-10">
			<div className="bg-white rounded-full inline-block p-2 border-2">
				<Image
					unoptimized
					loader={grpahCMSImageLoader}
					alt={publisher.name}
					height="70px"
					width="70px"
					className="align-middle"
					src={publisher.photo.url}
				/>
			</div>
		</div>

		<h3 className="text-white mt-4 mb-4 text-xl font-bold">{publisher.name}</h3>
		<p className="text-white text-ls">{publisher.bio}</p>
	</div>
);

export default Author;

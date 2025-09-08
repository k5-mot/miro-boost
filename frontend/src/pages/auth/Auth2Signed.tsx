import { ProgressIndicator } from "@serendie/ui";
import { Container, Flex } from "@styled-system/jsx";
import type React from "react";
import { useEffect } from "react";
import "@/assets/style.css";
import welcome from "@/assets/miro/welcome.png";
import { Headline } from "@/components/typography";

const AuthSigned: React.FC = () => {
	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		const start = Date.now();

		const fetchAuthUrl = () => {
			// 認証後、3秒待機した後、モーダルを閉じる
			timeoutId = setTimeout(
				() => {
					void (async () => {
						await miro.board.ui.closeModal();
					})();
				},
				Math.max(0, 3000 - (Date.now() - start)),
			);
		};
		void fetchAuthUrl();
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Container
			style={{
				width: "100vw",
				height: "100vh",
				margin: 0,
				padding: 0,
				backgroundImage:
					'url("/src/assets/serendie/konjo/composition_c/konjo_composition_c_landscape.svg")',
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Flex
				width="100%"
				height="100%"
				gap={8}
				direction="column"
				align="center"
				justify="center"
			>
				<Flex
					width="90%"
					direction="column"
					align="center"
					style={{
						borderRadius: "64px",
						backdropFilter: "blur(128px)",
						padding: "16px",
					}}
				>
					<img
						src={welcome}
						alt={welcome.toString()}
						style={{
							height: "50vh",
							width: "auto",
							borderRadius: "64px",
							backdropFilter: "blur(64px)",
						}}
					/>
					<Headline variant="medium">Completed to install</Headline>
					<ProgressIndicator size="medium" color="gray" />
				</Flex>
			</Flex>
		</Container>
	);
};
export default AuthSigned;

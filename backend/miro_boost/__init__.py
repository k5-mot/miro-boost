from pathlib import Path

from miro_boost.common.logger import get_logger

__all__ = [file.stem for file in Path(__file__).parent.glob("[a-zA-Z0-9]*.py")]


def main() -> None:
    """Main."""
    logger = get_logger()
    logger.debug("Hello from miro-speedtest!")


if __name__ == "__main__":
    main()

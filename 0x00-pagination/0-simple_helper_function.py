#!/usr/bin/env python3
"""Pagination helper function.
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Retrieves the index range from a given page and page size.
    """
    return (page - 1) * page_size, page * page_size

# Test the function with example values
if __name__ == "__main__":
    print(index_range(1, 10))  # Expected output: (0, 10)
    print(index_range(2, 10))  # Expected output: (10, 20)
    print(index_range(3, 5))   # Expected output: (10, 15)

